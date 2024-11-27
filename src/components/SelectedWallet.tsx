import { useWalletProvider } from "../hooks/useWalletProvider";

export const SelectedWallet = () => {
  const { selectedWallet, selectedAccount, disconnectWallet } =
    useWalletProvider();

  const upperAfterLastTwo =
    (selectedAccount?.slice(0, 2) ?? "") + selectedAccount?.slice(2);
  const formattedAccountAddress = `${upperAfterLastTwo.substring(
    0,
    5
  )}...${upperAfterLastTwo.substring(39)}`;

  return (
    selectedAccount && (
      <div className="flex flex-col gap-2">
        <div className="text-sm font-bold opacity-50">Selected Wallet:</div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <img
              src={selectedWallet?.info.icon}
              alt={selectedWallet?.info.name}
            />
            <div className="flex flex-col">
              <div>{selectedWallet?.info.name}</div>
              <div>({formattedAccountAddress})</div>
            </div>
          </div>
          <div>
            <div>
              <strong>uuid:</strong> {selectedWallet?.info.uuid}
            </div>
            <div>
              <strong>rdns:</strong> {selectedWallet?.info.rdns}
            </div>
          </div>
          <button
            className="p-2 bg-red-500 rounded-md text-white"
            onClick={disconnectWallet}
          >
            Disconnect wallet
          </button>
        </div>
      </div>
    )
  );
};
