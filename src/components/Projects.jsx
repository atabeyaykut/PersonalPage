import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaCircle } from 'react-icons/fa';

const fetchStarredRepos = async () => {
    const { data } = await axios.get('https://api.github.com/users/atabeyaykut/starred');
    return data.slice(0,8);
};

function Projects() {
    const { data: repos, isLoading, error } = useQuery({
        queryKey: ['starred-repos'],
        queryFn: fetchStarredRepos,
        staleTime: 5 * 60 * 1000,
        cacheTime: 30 * 60 * 1000,
    });

    if (error) {
        return (
            <section className="projects page-transition">
                <h2 className="heading">My <span>Projects</span></h2>
                <div className="loading">Error: {error.message}</div>
            </section>
        );
    }

    return (
        <section className="projects page-transition">
            <h2 className="heading">My <span>Projects</span></h2>
            <div className="projects-container">
                {isLoading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    repos.map((repo, index) => (
                        <div className="project-box stagger-animation"
                            key={repo.id}
                            style={{ '--index': index }}>
                            <h3>{repo.name}</h3>
                            <div className="project-info">
                                {repo.language && (
                                    <span className="language">
                                        <FaCircle /> {repo.language}
                                    </span>
                                )}
                            </div>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn">
                                View Project
                            </a>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}

export default Projects; 