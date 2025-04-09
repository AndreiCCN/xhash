"use client";

import { client } from "@/utils/client";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import Nav from "./Nav";

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.binance.wallet"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

const Header = () => {
  return (
    <header className="pt-6 bg-[#1d1d1d]">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-3xl font-bold">
          XHASH
        </Link>
        <div className="w-2/5 p-2 rounded-full flex justify-between items-center gap-4 border border-[#909090]">
          <div className="w-[50px] h-[35px] rounded-full bg-[#909090]"></div>
          <input
            className="w-full p-1 text-lg text-medium outline-none"
            placeholder="Search by address / txn hash / block"
          />
          <SearchIcon />
        </div>
        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{
            title: "Connect your wallet",
            size: "wide",
          }}
          connectButton={{ label: "Connect Wallet" }}
        />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
