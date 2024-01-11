

export default function Sections({ title, children, ...props }) {  // here ...props merges it
    console.log(children)
    return (
        <section {...props}> {/* here ...props spreads it*/}
            <h2>{title}</h2>
            {children}
        </section>
    )
}