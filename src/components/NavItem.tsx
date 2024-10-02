type NavItemProps = {
    label: string;
}

export default function NavItem({label}: NavItemProps){
          return  <li className="underline underline-offset-4">{label}</li>
}