// Define interfaces for MajorCredits and MinorCredits
export interface MajorCredits {
    credits: number & { __brand: 'MajorCredits.credits' };
  }
  
  export interface MinorCredits {
    credits: number & { __brand: 'MinorCredits.credits' };
  }
  
  // Function to sum major credits
  export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits } as MajorCredits;
  }
  
  // Function to sum minor credits
  export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits } as MinorCredits;
  }
  