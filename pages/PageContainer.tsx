import React from 'react';

interface PageContainerInterface {
  children?: React.ReactNode;
}
export default ({ children }: PageContainerInterface): React.ReactElement => {
  return (
    <div className="page">
      <div className="page-wrapper">{children}</div>
    </div>
  );
};

const PageContainerWrapper = (WrapperComponent: React.ReactNode) => {
  return (props: any): React.ReactElement => {
    return (
      <div className="page">
        <div className="page-wrapper">
          <WrapperComponent {...props} />
        </div>
      </div>
    );
  };
};
export { PageContainerWrapper };
