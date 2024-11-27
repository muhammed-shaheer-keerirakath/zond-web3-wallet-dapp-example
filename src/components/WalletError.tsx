import { useWalletProvider } from "../hooks/useWalletProvider";

export const WalletError = () => {
  const { errorMessage, clearError } = useWalletProvider();
  const isError = !!errorMessage;

  return (
    isError && (
      <div className="flex flex-col gap-2">
        <div className="text-sm font-bold opacity-50">Wallet Error:</div>
        <div className="flex flex-col gap-2">
          <div>
            <strong>Error:</strong> {errorMessage}
          </div>
          <button
            className="p-2 bg-gray-600 rounded-md text-white"
            onClick={clearError}
          >
            Clear error
          </button>
        </div>
      </div>
    )
  );
};
