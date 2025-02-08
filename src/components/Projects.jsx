import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa';

const fetchGithubRepos = async () => {
    const { data } = await axios.get('https://api.github.com/users/atabeyaykut/repos');
    return data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 10);
};

function Projects() {
    const { data: repos, isLoading, error } = useQuery({
        queryKey: ['repos'],
        queryFn: fetchGithubRepos,
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

    if (isLoading) {
        return (
            <section className="projects page-transition">
                <h2 className="heading">My <span>Projects</span></h2>
                <div className="loading">Loading...</div>
            </section>
        );
    }

    return (
        <section className="projects page-transition">
            <h2 className="heading">My <span>Projects</span></h2>
            <div className="projects-container">
                {repos.map((repo) => (
                    <div className="project-box" key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description || 'No description available'}</p>
                        <div className="project-info">
                            <span>
                                <FaStar /> {repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch /> {repo.forks_count}
                            </span>
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
                ))}
            </div>
        </section>
    );
}

export default Projects; 