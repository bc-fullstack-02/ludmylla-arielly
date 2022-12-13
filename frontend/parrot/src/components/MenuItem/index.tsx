import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Slot } from "@radix-ui/react-slot";
import Text from "../Text";

interface MenuItemProps {
    menuTitle: string;
    children?: ReactNode;
    route: string;
}

function MenuItem(props: MenuItemProps) {
    return (
        <li className="mt-5">
            <Link to={props.route}>
            <div className="flex items-center px-4 rounded-full text-gray-500 hover:bg-sky-400 ml-2">
                <Slot className="text-slate-50">{props.children}</Slot>
                <Text className="font-extrabold ml-4">{props.menuTitle}</Text>
            </div>
            </Link>
        </li>
    )
}

export default MenuItem;