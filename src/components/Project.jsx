import React from 'react';

const Projects = () => {
  return (
    <section className="projects-section">
      <h3>Proyectos</h3>
      <ul>
        <li>
          <strong>Trabajo 1:</strong> Descripción breve del proyecto.
        </li>
        <li>
          <strong>Trabajo 2:</strong>
          <a href="https://github.com/DonAce29/practica-2.git" target="_blank" rel="noreferrer" className="project-link">
            Ver Proyecto
          </a>
        </li>
        <li>
          <strong>Trabajo 3:</strong>
          <a
            href="https://github.com/edwinmgallego/clase-practica-css-jueves/tree/d58c6df6c4199ecdcbfc754077f4835788c70ef8/NDonneys-2211348"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Ver Proyecto
          </a>
        </li>
        <li>
          <strong>Trabajo 4:</strong>
          <a href="https://github.com/DonAce29/Actividadsemana9.git" target="_blank" rel="noreferrer" className="project-link">
            Ver Proyecto
          </a>
        </li>
        <li>
          <strong>Trabajo 5:</strong>
          <a href="https://github.com/DonAce29/Proyecto5.git" target="_blank" rel="noreferrer" className="project-link">
            Ver Proyecto
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
