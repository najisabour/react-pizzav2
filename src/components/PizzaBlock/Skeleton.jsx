import React from 'react';
import ContentLoader from "react-content-loader";

function Skeleton(props) {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="134" cy="136" r="125" />
            <rect x="0" y="279" rx="10" ry="10" width="280" height="20" />
            <rect x="0" y="326" rx="10" ry="10" width="280" height="85" />
            <rect x="0" y="427" rx="10" ry="10" width="100" height="25" />
            <rect x="127" y="427" rx="10" ry="10" width="150" height="25" />
        </ContentLoader>
    );
}

export default Skeleton;