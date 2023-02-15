import Image from "next/image";
import Link from "next/link";
import React from "react";

const Conversation = ({ data, unreadCount }) => {
  return (
    <div>
      <div className="flex my-2 rounded-lg shadow-[1px_1px_5px_#000000] shadow-gray-300">
        <div className="flex items-center justify-between p-4 gap-4">
          <Image
            src={data?.photoUrl}
            width={50}
            height={50}
            className="rounded-full self-start object-cover aspect-square"
            alt="User Image"
          />
          <div>
            <h4 className="font-medium text-base my-1">{data?.username}</h4>
            <p>
              Hi Melina, you still searcing for a tripmate for spain...
              {unreadCount != 0 && (
                <span className="bg-green-100 p-1 rounded-full text-green-700">
                  {unreadCount}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
