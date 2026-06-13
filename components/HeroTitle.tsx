'use client';

import { useEffect, useState } from 'react';

const roles = [
  'an inventor',
  'a founder',
  'a designer',
  'a builder',
  'Rania Khan',
];

export function HeroTitle() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isFinalRole = roleIndex === roles.length - 1;

    const timer = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextRole = currentRole.slice(0, typedRole.length + 1);
          setTypedRole(nextRole);

          if (nextRole === currentRole && !isFinalRole) {
            window.setTimeout(() => setIsDeleting(true), 850);
          }
        } else {
          const nextRole = currentRole.slice(0, typedRole.length - 1);
          setTypedRole(nextRole);

          if (nextRole === '') {
            setIsDeleting(false);
            setRoleIndex((current) => current + 1);
          }
        }
      },
      isDeleting ? 42 : 78
    );

    return () => window.clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <h1 className="welcome-heading">
      <span>
        Welcome, I’m{' '}
        <strong className={typedRole === 'Rania Khan' ? 'pixel-name' : ''}>
          {typedRole}
        </strong>
        <span className="cursor" />
      </span>
    </h1>
  );
}
