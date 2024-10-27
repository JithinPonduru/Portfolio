import React from 'react';

function AfterName() {
    return (
        <div className="h-screen w-full overflow-x-scroll scroll-snap-x mandatory flex">
            <section className="snap-center w-full h-full flex-shrink-0 flex items-center justify-center bg-blue-500">
                <h1 className="text-white text-3xl">Page 1</h1>
            </section>
            <section className="snap-center w-full h-full flex-shrink-0 flex items-center justify-center bg-red-500">
                <h1 className="text-white text-3xl">Page 2</h1>
            </section>
            <section className="snap-center w-full h-full flex-shrink-0 flex items-center justify-center bg-green-500">
                <h1 className="text-white text-3xl">Page 3</h1>
            </section>
        </div>
    );
}

export default AfterName;
