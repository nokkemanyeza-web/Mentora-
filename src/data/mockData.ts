export type Option = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  text: string;
  options: Option[];
  explanation: string;
};

export type Topic = {
  id: string;
  title: string;
  progress: number;
  questions: Question[];
};

export type Course = {
  id: string;
  title: string;
  board: 'ZIMSEC' | 'Cambridge';
  level: 'O-Level' | 'A-Level';
  icon: string;
  color: string;
  topics: Topic[];
};

export const mockCourses: Course[] = [
  {
    id: 'zimsec-o-math',
    title: 'Mathematics',
    board: 'ZIMSEC',
    level: 'O-Level',
    icon: 'calculator-variant',
    color: '#208AEF',
    topics: [
      {
        id: 't-algebra',
        title: 'Algebraic Fractions',
        progress: 65,
        questions: [
          {
            id: 'q1',
            text: 'Simplify: (x^2 - y^2) / (x - y)',
            options: [
              { id: 'o1', text: 'x + y', isCorrect: true },
              { id: 'o2', text: 'x - y', isCorrect: false },
              { id: 'o3', text: 'x^2 + y^2', isCorrect: false },
              { id: 'o4', text: '1', isCorrect: false },
            ],
            explanation: 'Difference of two squares: x^2 - y^2 = (x-y)(x+y). Dividing by (x-y) leaves x+y.',
          },
          {
            id: 'q2',
            text: 'Solve for x: 3x / 4 = 15',
            options: [
              { id: 'o1', text: '5', isCorrect: false },
              { id: 'o2', text: '20', isCorrect: true },
              { id: 'o3', text: '15', isCorrect: false },
              { id: 'o4', text: '60', isCorrect: false },
            ],
            explanation: 'Multiply both sides by 4: 3x = 60. Divide by 3: x = 20.',
          }
        ]
      },
      {
        id: 't-geometry',
        title: 'Circle Geometry',
        progress: 20,
        questions: [
          {
            id: 'q3',
            text: 'The angle subtended by an arc at the centre is...',
            options: [
              { id: 'o1', text: 'equal to the angle at the circumference.', isCorrect: false },
              { id: 'o2', text: 'half the angle at the circumference.', isCorrect: false },
              { id: 'o3', text: 'twice the angle at the circumference.', isCorrect: true },
              { id: 'o4', text: 'complementary to the angle at the circumference.', isCorrect: false },
            ],
            explanation: 'A fundamental theorem of circle geometry: the angle at the centre is twice the angle at the circumference subtended by the same arc.',
          }
        ]
      }
    ]
  },
  {
    id: 'zimsec-o-science',
    title: 'Combined Science',
    board: 'ZIMSEC',
    level: 'O-Level',
    icon: 'flask',
    color: '#1CA464',
    topics: [
      {
        id: 't-cells',
        title: 'Cell Biology',
        progress: 100,
        questions: [
          {
            id: 'q4',
            text: 'Which organelle is responsible for respiration?',
            options: [
              { id: 'o1', text: 'Nucleus', isCorrect: false },
              { id: 'o2', text: 'Chloroplast', isCorrect: false },
              { id: 'o3', text: 'Mitochondrion', isCorrect: true },
              { id: 'o4', text: 'Ribosome', isCorrect: false },
            ],
            explanation: 'Mitochondria are the powerhouse of the cell, where aerobic respiration occurs to release energy.',
          }
        ]
      }
    ]
  },
  {
    id: 'cambridge-a-physics',
    title: 'Physics',
    board: 'Cambridge',
    level: 'A-Level',
    icon: 'atom',
    color: '#8A2BE2',
    topics: [
      {
        id: 't-kinematics',
        title: 'Kinematics',
        progress: 0,
        questions: []
      }
    ]
  }
];
