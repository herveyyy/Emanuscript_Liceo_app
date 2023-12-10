import React from 'react';
import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import { FaXmark } from 'react-icons/fa6';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

const ViewerPDF = ({ open, handler, docURL, title }) => {

  const docs = [
    { uri: docURL, fileType: 'pdf', fileName: title },
  ];

  return (
    <Dialog open={open} size='xxl'>
      <DialogHeader className='flex justify-between border-b-2 '>
        <p className='w-full'>Read</p>
        <div className='flex justify-center w-[5%]'>
          <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer' />
        </div>
      </DialogHeader>
      <DialogBody className=' w-full flex justify-center overflow-hidden'>
        <div className='w-[60rem] h-full '>
          <DocViewer
            documents={docs}
            pluginRenderers={DocViewerRenderers}
            // config={{
            //   header: {
            //     disableHeader: false,
            //     disableFileName: false,
            //     retainURLParams: false,
            //   },
            // }}
            // theme={{
            //   primary: "#5296d8",
            //   secondary: "#ffffff",
            //   tertiary: "#5296d899",
            //   textPrimary: "#ffffff",
            //   textSecondary: "#5296d8",
            //   textTertiary: "#00000099",
            //   disableThemeScrollbar: false,
            // }}
                      />
        </div>
      </DialogBody>
      <DialogFooter className='flex gap-x-2 justify-center'>
      </DialogFooter>
    </Dialog>
  );
};

export default ViewerPDF;
