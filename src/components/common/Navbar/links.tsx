"use client";
import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';

import {menuCategories} from './products';

const MenubarLinks = () => {
  return (
    <Menubar.Root className="flex p-[3px]">
      {menuCategories.map((category, index) => (
        <Menubar.Menu key={index}>
          <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
            {category.title}
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="min-w-[220px] border bg-white dark:bg-[#131313] rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              sideOffset={5}
              alignOffset={-3}
            >
              {category.items && category.items.length > 0 && (
                <>
                  {category.items.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      {item.subitems ? (
                        <Menubar.Sub>
                          <Menubar.SubTrigger className=" group text-[13px] p-3 leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                            {item.title}
                          </Menubar.SubTrigger>
                          <Menubar.Portal>
                            <Menubar.SubContent
                              className="min-w-[220px] bg-white dark:bg-[#131313] rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                              alignOffset={-5}
                            >
                              {item.subitems.map((subitem, subIndex) => (
                                <Menubar.Item
                                  key={subIndex}
                                  className="text-[13px] leading-none text-violet11 p-2 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                >
                                  <a href={subitem.link}>{subitem.title}</a>
                                </Menubar.Item>
                              ))}
                            </Menubar.SubContent>
                          </Menubar.Portal>
                        </Menubar.Sub>
                      ) : (
                        <Menubar.Item
                          className="group text-[13px] p-[3px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          <a href={item.link}>{item.title}</a>
                        </Menubar.Item>
                      )}
                      {itemIndex < category.items.length - 1 && (
                        <Menubar.Separator className="h-[1px] bg-mauve8" />
                      )}
                    </React.Fragment>
                  ))}
                </>
              )}
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      ))}
    </Menubar.Root>
  );
};

export default MenubarLinks;