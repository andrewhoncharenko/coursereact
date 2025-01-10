export default function TabButton({children, isSelected, onSelect}) {
    return (
         <li>
            <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}