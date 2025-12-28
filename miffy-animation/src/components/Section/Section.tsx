import clsx from "clsx";

type SectionProps = React.HTMLAttributes<HTMLElement>;

function Section({ className, id, children, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx("min-h-screen w-screen", className)}
            {...props}
        >
            {children}
        </section>
    );
}

export default Section;
