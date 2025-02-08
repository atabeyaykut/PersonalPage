import React, { useState, useEffect } from 'react';
import { FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa';

function Projects() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/atabeyaykut/repos');
                const data = await response.json();
                const sortedRepos = data
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                    .slice(0, 10);
                setRepos(sortedRepos);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching repos:', error);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <section className="projects">
                <h2 className="heading">My <span>Projects</span></h2>
                <div className="loading">Loading...</div>
            </section>
        );
    }

    return (
        <section className="projects">
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