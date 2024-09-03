import React, { FC } from 'react'
import { Box, LinearProgress } from "@mui/material";
type LoadingProps = {
  isShow: boolean;
};

const Loading: FC<LoadingProps> = ({ isShow }) => {
  return (
    <>
      <div className='mt-2'>
        {isShow && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />

          </Box>
        )}
      </div>
    </>
  )

}

export default Loading