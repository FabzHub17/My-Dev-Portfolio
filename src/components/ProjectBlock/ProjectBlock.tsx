import "./_projectBlock.scss";

function ProjectBlock({title, description}:{title:string; description:string}){ // in TS need to specify the type
    return(
        <>
        <div className="project">
            <h3 className="project__title heading heading-secondary">{title}</h3>
            <p className="project__description paragraph">
                {description}
            </p>

        </div>
        </>
    )
}

export default ProjectBlock;