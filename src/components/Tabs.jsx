export default function Tabs({ children, buttons, buttonsContainer }) {
    let ButtonsContainer = buttonsContainer;
    //cannot use buttonsContainer directly because it will look for built-in tag as it starts with lowercase
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}