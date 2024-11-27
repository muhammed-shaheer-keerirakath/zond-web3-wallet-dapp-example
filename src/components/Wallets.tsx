import { DetectedWallets } from "./DetectedWallets";
import { SelectedWallet } from "./SelectedWallet";
import { WalletError } from "./WalletError";
import { WalletProvider } from "./WalletProvider";

export const Wallets = () => {
  return (
    <WalletProvider>
      <div className="w-full flex justify-center p-12">
        <div className="flex flex-col gap-8 p-8 w-80 min-h-96 dark:border-white border-gray-950 border-2 rounded-xl">
          <DetectedWallets />
          <SelectedWallet />
          <WalletError />
        </div>
      </div>
    </WalletProvider>
  );
};
