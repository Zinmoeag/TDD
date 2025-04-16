import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import Layout from '../shared/ui/layout'

export const Route = createRootRoute({
  component: Layout,
})