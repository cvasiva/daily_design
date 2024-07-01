import "./ProjectContainer.css";

const ProjectContainer = () => {
  return (
    <div className="project-container">
      <div className="container12">
        <img
          className="group-2-9-finejpg1"
          alt=""
          src="/group--2--9--finejpg-1@2x.png"
        />
        <img
          className="group-3-9-quick-2jpg1"
          alt=""
          src="/group--3--9--quick-2jpg-1@2x.png"
        />
        <div className="group-4-9-meatjpg-parent">
          <img
            className="group-4-9-meatjpg1"
            alt=""
            src="/group--4--9--meatjpg-1@2x.png"
          />
          <img
            className="group-5-9-backryjpg1"
            alt=""
            src="/group--5--9--backryjpg-1@2x.png"
          />
        </div>
        <img
          className="group-6-9-fruitsjpg"
          loading="lazy"
          alt=""
          src="/group--6--9--fruitsjpg@2x.png"
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
