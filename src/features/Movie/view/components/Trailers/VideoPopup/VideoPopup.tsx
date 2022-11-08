import { gsap } from 'gsap';
import { FC, useRef, useEffect, useState } from 'react';

import { Loader } from 'shared/components/Loader';
import { Video } from 'shared/components/Video';

import { VideoPopupProps } from '../types';
import {
  StyledWrapper,
  VideoWrapper,
  ButtonClose,
  LoaderWrapper,
} from './VideoPopup.styled';

const VideoPopup: FC<VideoPopupProps> = ({ videoKey, onClose }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    gsap.to(wrapperRef.current, {
      width: '80%',
      height: 'max-content',
      duration: 0.5,
    });
  }, [wrapperRef.current]);

  useEffect(() => {
    if (isLoaded) {
      gsap.to(wrapperRef.current, {
        background: 'transparent',
        duration: 0.5,
      });
      gsap.to(videoWrapperRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    }
  }, [videoWrapperRef.current, isLoaded]);

  const handleVideoLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <StyledWrapper ref={wrapperRef} isLoaded={isLoaded}>
      <VideoWrapper ref={videoWrapperRef}>
        <Video id={videoKey} onLoaded={handleVideoLoaded} />
        <ButtonClose onClick={onClose} />
      </VideoWrapper>
      {!isLoaded && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoaded && <ButtonClose onClick={onClose} aria-label="close video" />}
    </StyledWrapper>
  );
};

export { VideoPopup };
