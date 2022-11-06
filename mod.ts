import Citadel from './src/citadel.ts';

export * from './src/manager/index.ts';
export * from './src/middleware/index.ts';
export * from './src/manager/apps.ts';
export * from './src/manager/auth.ts';
export * from './src/manager/external.ts';
export * from './src/manager/system.ts';
export * from './src/middleware/pages.ts';
export * from './src/middleware/lnd.ts';
export {
  MiddlewareBitcoin,
} from './src/middleware/bitcoin.ts';
export * from './src/middleware/lnd/channel.ts';
export * from './src/middleware/lnd/info.ts';
export * from './src/middleware/lnd/lightning.ts';
export * from './src/middleware/lnd/transaction.ts';
export * from './src/middleware/lnd/wallet.ts';
export * from './src/common/types.ts';

export * from './src/middleware/autogenerated-types.ts';

export * from './src/middleware/bitcoin-types.ts';

export * from './src/common/types.ts';

export type {
  SyncStatus,
  StatsDump,
  Stats,
  Block,
  BasicBlock,
  Transaction as BitcoinCoreTransaction,
} from './src/middleware/bitcoin.ts';

export * from './src/middleware/lnd/channel.ts';

export type {extendedPaymentRequest} from './src/middleware/lnd/lightning.ts';

export type {Transaction_extended} from './src/middleware/lnd/transaction.ts';

export type {LightningBalance, LightningDetails} from './src/middleware/pages.ts';

export type {LnAddressSignupResponse} from './src/manager/external.ts';

export default Citadel;