import "./_projectBlock.scss";

function ProjectBlock({ title, description,url }: { title: string; description: string;url:string }) // in TS need to specify the type
{
    const clicked = (link:string) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <div className="project" onClick={() =>{clicked(url)}}>
                <h3 className="project__title heading heading-secondary">{title}</h3>
                <p className="project__description paragraph">
                    {description}
                </p>

            </div>
        </>
    )
}

export default ProjectBlock;