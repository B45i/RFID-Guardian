import network
import secrets
import urequests
from mfrc522 import MFRC522

reader = MFRC522(spi_id=0,sck=2,miso=4,mosi=3,cs=1,rst=0)


def connect():
    #Connect to WLAN
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(secrets.SSID, secrets.PASSWORD)
    while wlan.isconnected() == False:
        print('Waiting for connection...')
        sleep(1)
    print(f'connected to {secrets.SSID}, IP: {wlan.ifconfig()[0]}')

def send_card_request(id):
    body = {'rfid': id}
    headers = {'Authorization': secrets.API_KEY}
    response = urequests.post(secrets.ENDPOINT, json = body, headers=headers)

    print(response.status_code)
    if response.status_code == 200:
        print('Request success')        
        print(response.json())
#         print(response.text)


def listen_for_card():
    while True:
        reader.init()
        (stat, tag_type) = reader.request(reader.REQIDL)
        if stat == reader.OK:
            (stat, uid) = reader.SelectTagSN()
            if stat == reader.OK:
                card = int.from_bytes(bytes(uid),"little",False)
                print("CARD ID: " +str(card))
                send_card_request(card)

connect()
listen_for_card()
# send_card_request()
