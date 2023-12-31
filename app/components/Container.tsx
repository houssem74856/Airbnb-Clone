'use client';

interface ContainerProps {
    children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div 
        className="
          max-w-[2520px]
          max-auto
          xl:px-20md:px-10
          sm:px-2
          px-4
        ">
            {children}
        </div>
  )
}

export default Container