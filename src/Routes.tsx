import React from "react"
import { Title } from "./components"
import { Routes, Route, Navigate } from "react-router-dom"
import { ItemsModule, ActiveItemsModule } from "./modules/itemsModule"
import { WeaponsModule, ActiveWeaponsModule, WeaponsListModule } from "./modules/weaponsModule"
import { NavbarModule } from "./modules/NavBarModule"
import { About, Projects, Posts, Home, Loading } from "./pages"

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path={'/loading'} element={<Loading />} />
      <Route path={`/`} element={<NavbarModule />}>
        <Route path="/" element={<Navigate to="/loading" />} />
        <Route path={'/Home'} element={<Home />} />
        <Route path={`/about`} element={<About />}>
        </Route>
        <Route path={`/projects`} element={<Projects />}>
          <Route path="/projects/:type" element={<ItemsModule />}>
            <Route path={`:projectid`} element={<ActiveItemsModule />} />
          </Route>
        </Route>
        <Route path={`/Posts`} element={<Posts />}>
          <Route path={`/Posts/:list`} element={<WeaponsModule />}>
            <Route path={`:type`} element={<WeaponsListModule />}>
              <Route path={`:weaponid`} element={<ActiveWeaponsModule />} />
            </Route>
          </Route>
        </Route>
        {/* components debug pages */}
        <Route
          path="*"
          element={
            <Title title="CLASSIFIED" />
          }
        />
      </Route>
    </Routes>
  )
}

export const RoutesConfig = {
  RoutesConfigs: [
    {
      Text: `HOME`,
      Link: `home`,
    },
    {
      Text: "ABOUT",
      Link: `about`,
    },
    {
      Text: "PROJECTS",
      Link: `projects`
    },
    {
      Text: "POSTS",
      Link: `posts`
    },
    {
      Text: "SKILLS",
      Link: `skills`
    },
    {
      Text: "SYSTEM",
      Link: `system`,
    },
  ]
}