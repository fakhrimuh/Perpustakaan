import React from 'react';
import { Collapse, Typography, ListItem, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function NavListMenu({ skillsData }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return skillsData.map((skill, index) => {
    return (
      <React.Fragment key={index}>
        <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
          <MenuHandler>
            <Typography as="div" className="font-semibold text-base text-redPrimary flex">
              <ListItem className="flex items-center gap-2 py-2 pr-4" selected={isMenuOpen || isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
                {skill.Title}
                <ChevronDownIcon strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? 'rotate-180' : ''}`} />
                <ChevronDownIcon strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            {skill.Content.map((skillDetail, idx) => {
              return (
                <Link to={skillDetail.Links} key={idx}>
                  <MenuItem className="flex items-center border-b-2 border-redPrimary gap-3 rounded-lg">
                    <div>
                      <Typography variant="h6" className="flex items-center text-sm">
                        {skillDetail.Name}
                      </Typography>
                    </div>
                  </MenuItem>
                </Link>
              );
            })}
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>
            {skill.Content.map((skillDetail, idx) => {
              return (
                <MenuItem className="flex items-center border-b-2 border-redPrimary gap-3 rounded-lg">
                  <div>
                    <Typography variant="h6" className="flex items-center text-sm">
                      {skillDetail.Name}
                    </Typography>
                  </div>
                </MenuItem>
              );
            })}
          </Collapse>
        </div>
      </React.Fragment>
    );
  });
}
