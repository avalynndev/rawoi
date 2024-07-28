"use client";
import React, { useState } from "react";
import { Navbar, NavbarContent, Link, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

export default function NavbarContainer() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/search/${searchValue}`);
    }
  };
  return (
    <>
      <Navbar>
        <Link color="foreground" href="/">
          <p className="font-bold text-xl text-mono">ANIMUNET</p>
        </Link>
        <NavbarContent>
          <Input
            classNames={{
              base: "lg:w-full h-10 sm:w-full",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </NavbarContent>
      </Navbar>
    </>
  );
}
