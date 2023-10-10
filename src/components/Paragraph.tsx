type ParagraphProps= {
    as?: "p";
    className?: string;
    children: React.ReactNode

}


export default function Paragraph({

    as : Comp = "p",
    children,
    className,


}: ParagraphProps){
    return(
<Comp className="text-2xl text-center leading-10 font-normal font-body text-slate-600 mb-4 md:mb-8 max-w-md">
{children}
</Comp>
    )
}