export default function Tabs({children, buttonsContainer : ButtonsContainer = "menu", buttons}) {
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>;
}