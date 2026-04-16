import React, { use } from 'react';
import Friend from './Friend';


const friendPromise = fetch('/friends.json').then(res => res.json());

const Friends = () => {
    
    const friends = use(friendPromise);

    return (
        <div className='mt-20'>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-50'>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
           </div>
        </div>
    );
};

export default Friends;