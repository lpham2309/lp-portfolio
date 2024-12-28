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
    company: string;
    position: string;
    duration: string;
    description: string[];
}