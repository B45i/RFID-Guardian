// import { AppDataSource } from '../config/database.config';
// import { CardHolder } from '../entities/card-holder.entity';

// export default class CardHolderService {
//   cardHolderRepository = AppDataSource.getRepository(CardHolder);

//   async create(cardHolderData) {
//     const cardHolder = this.cardHolderRepository.create(cardHolderData);
//     await this.cardHolderRepository.save(cardHolder);
//     return cardHolder;
//   }

//   async findAll() {
//     return this.cardHolderRepository.find();
//   }

//   async findOne(id) {
//     return this.cardHolderRepository.findOne(id);
//   }

//   async update(id, cardHolderData) {
//     const cardHolder = await this.cardHolderRepository.findOne(id);
//     if (!cardHolder) {
//       throw new Error(`Card holder not found with id: ${id}`);
//     }
//     this.cardHolderRepository.merge(cardHolder, cardHolderData);
//     await this.cardHolderRepository.save(cardHolder);
//     return cardHolder;
//   }

//   async delete(id) {
//     const cardHolder = await this.cardHolderRepository.findOne(id);
//     if (!cardHolder) {
//       throw new Error(`Card holder not found with id: ${id}`);
//     }
//     await this.cardHolderRepository.delete(id);
//   }
// }
