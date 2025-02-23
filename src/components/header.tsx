import React, { useState } from "react";
import { HeaderLink } from "./header-link";

export const Header: React.FC = () => {
    const [dropdown, setDropdown] = useState<boolean>(false);

    return (
        <header className="pt-24 absolute w-full">
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
                <div className="my-3 px-3 py-2 space-x-1 bg-[#dfdfdf] hover:bg-[#d8d8d8] border border-gray-600 hover:border-gray-400 rounded-full flex">
                    <HeaderLink
                        href="/"
                        dropdown={{
                            toggle: dropdown,
                            onClick: () => {
                                setDropdown(!dropdown);
                            },
                        }}
                    >
                        Dwit
                    </HeaderLink>
                    <HeaderLink href="/blogs">Blogs</HeaderLink>
                </div>
            </nav>
        </header>
    );
};
