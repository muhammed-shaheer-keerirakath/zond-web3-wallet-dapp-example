import { useWalletProvider } from "../hooks/useWalletProvider";

export const DetectedWallets = () => {
  const { wallets, connectWallet } = useWalletProvider();

  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg font-bold">Wallets Detected:</div>
      <div className="flex flex-col gap-4 items-center">
        {Object.keys(wallets).length > 0 ? (
          Object.values(wallets).map((provider: EIP6963ProviderDetail) => (
            <button
              className="w-40 flex flex-col gap-2 items-center p-4 border-2 dark:border-white border-gray-950 rounded-lg"
              key={provider.info.uuid}
              onClick={() => connectWallet(provider.info.rdns)}
            >
              <img src={provider.info.icon} alt={provider.info.name} />
              <div>{provider.info.name}</div>
            </button>
          ))
        ) : (
          <div>No wallets found!</div>
        )}
      </div>
    </div>
  );
};
