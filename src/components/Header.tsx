"use client";

import { client } from "@/utils/client";
import Link from "next/link";
import { ConnectButton, darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import Nav from "./Nav";
import { Search, TagTwoTone } from "@mui/icons-material";

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
        <Link href="/" className="flex items-center gap-4 text-3xl font-black">
          <div className="p-2 bg-white leading-[0.6] rounded-sm">
            <TagTwoTone className="text-[#5e5e5e] bg-transparent rotate-45" />
          </div>
          XHASH
        </Link>
        <div className="w-1/3 px-4 py-2 rounded-full flex justify-between items-center gap-2 border border-[#5e5e5e] transition-all duration-300 ease-in-out">
          <Search />
          <input
            className="w-full p-1 text-lg text-medium outline-none text-center"
            placeholder="Search by address / txn hash / block"
          />
        </div>
        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{
            title: "Connect your wallet",
            size: "compact",
            showThirdwebBranding: false,
          }}
          connectButton={{ label: "Connect Wallet" }}
          theme={darkTheme({
            colors: {
              primaryButtonBg: "#3e3e3e",
              primaryButtonText: "#ffffff",
              primaryText: "#ffffff",
              secondaryText: "#eef0f0",
              connectedButtonBg: "#3e3e3e",
              connectedButtonBgHover: "#474749",
            },
          })}
        />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
