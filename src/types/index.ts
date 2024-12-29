export interface TimelineEvent {
    type: 'education' | 'experience';
    title: string;
    organization: string;
    startDate: string;
    endDate: string;
    description: string | string[];
    tags?: string[];
}

export interface Experience {
    company: string;
    position: string;
    duration: string;
    description: string[];
}

export interface Education {
    school: string;
    degree: string;
    field: string;
    year: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Project {
    id: number,
    title: string,
    description: string,
    technologies: string[],
    imageUrl: string,
    github: string,
    link: string
}