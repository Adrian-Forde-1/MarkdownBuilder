import { BUILDER_VIEW, PREVIEW_VIEW, RAW_VIEW } from './types';

export const changeToBuilderView = () => {
  return {
    type: BUILDER_VIEW,
  };
};

export const changeToPreviewView = () => {
  return {
    type: PREVIEW_VIEW,
  };
};

export const changeToRawView = () => {
  return {
    type: RAW_VIEW,
  };
};
