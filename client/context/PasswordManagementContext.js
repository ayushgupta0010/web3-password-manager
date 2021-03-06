import React, { createContext, useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../lib/constants";

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

export const PasswordManagerContext = createContext();

export const PasswordManagerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState();
  const [passwords, setPasswords] = useState([]);

  // Metamask related configuration starts here
  const checkIfWalletIsConnected = () => {
    if (!window.ethereum) return alert("MetaMask is not installed");
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts) => {
        accounts && setAccount(accounts[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const connectWallet = () => {
    if (!window.ethereum) return alert("MetaMask is not installed");

    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        accounts && setAccount(accounts[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  // Metamask related configuration ends here

  // Contract methods starts here
  const addPassword = async (url, username, password) => {
    const contract = getEthereumContract();
    const tx = await contract.add(url, username, password);
    setLoading(true);
    await tx.wait();
    getPasswords();
    setLoading(false);
  };

  const updatePassword = async (index, url, username, password) => {
    const contract = getEthereumContract();
    const tx = await contract.update(index, url, username, password);
    setLoading(true);
    await tx.wait();
    setPasswords((p) =>
      p.map((x, i) => (i === index ? { ...x, url, username, password } : x))
    );
    setLoading(false);
  };

  const getPasswords = useCallback(async () => {
    if (!account) return;
    const contract = getEthereumContract();
    setLoading(true);
    setPasswords(await contract.getPasswords());
    setLoading(false);
  }, [account]);
  // Contract methods ends here

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <PasswordManagerContext.Provider
      value={{
        account,
        loading,
        passwords,
        addPassword,
        getPasswords,
        connectWallet,
        updatePassword,
      }}>
      {children}
    </PasswordManagerContext.Provider>
  );
};
