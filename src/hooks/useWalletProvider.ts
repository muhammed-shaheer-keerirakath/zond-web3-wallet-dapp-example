import { useContext } from "react";
import { WalletProviderContext } from "../contexts/walletProviderContext";

export const useWalletProvider = () => useContext(WalletProviderContext);
