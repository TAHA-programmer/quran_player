// QariList.js
import React from 'react';

function QariList({ qaris }) {
    return (
        <section id="qariList" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Select Qari</h2>
            <div className="grid grid-cols-2 gap-4">
                {qaris.map(qari => (
                    <div key={qari.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">{qari.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default QariList;
