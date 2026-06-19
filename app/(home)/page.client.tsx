"use client"

import Link from "next/link"
import { motion, useAnimation } from "motion/react"

import { cn } from "@/lib/cn"
import { useIsMobile } from "@/hooks/use-mobile"

const DashedLineContainer = ({ children }: { children: React.ReactNode }) => {
  const container = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  return (
    <motion.div
      className="flex flex-col size-full relative"
      variants={container}
      initial="initial"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}

const VerticalDashedLine = ({
  className,
  width = "100%",
  mobileWidth = "100%",
}: {
  className?: string
  width?: string
  mobileWidth?: string
}) => {
  const isMobile = useIsMobile()
  const variants = {
    initial: { width: "0%", opacity: 0.6 },
    visible: {
      width: isMobile ? mobileWidth : width,
      opacity: 0.2,
      transition: { duration: 1 },
    },
  }

  return (
    <motion.div
      variants={variants}
      className={cn(
        "relative border-dashed border-t border-primary",
        className
      )}
    />
  )
}

const HorizontalDashedLine = ({
  className,
  side,
  height = "100%",
}: {
  className?: string
  side: "left" | "right"
  height?: string
}) => {
  const variants = {
    initial: { height: "0%", opacity: 0.6 },
    visible: { height, opacity: 0.2, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={variants}
      className={cn(
        "border-dashed border-l border-primary absolute top-0",
        side === "left" ? "left-0" : "right-0",
        className
      )}
    />
  )
}

const DashedCircle = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute hidden md:block", className)}>
      <motion.div className="relative" initial="initial" animate="visible">
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="absolute inset-0"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-primary/20"
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

const Feature = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <motion.div
      className="p-6 bg-background/50 backdrop-blur-sm border-l border-t border-dashed border-primary/20 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.h3
        className="text-xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 pointer-events-none"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

const BecomeSponsor = () => {
  return (
    <motion.div
      className="bg-background/50 backdrop-blur-sm border-x border-b border-dashed border-primary/20 relative overflow-hidden group py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div className="flex flex-col items-center gap-4">
        <motion.h3
          className="text-xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Become a Sponsor
        </motion.h3>

        <motion.p
          className="text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          If you find Display UI helpful, please consider sponsoring us to
          support our development
        </motion.p>

        <motion.a
          href="https://www.linkedin.com/in/rehmankalawant/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sponsor on LinkedIn
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 pointer-events-none"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

const GetStarted = () => {
  const controls = useAnimation()

  const variants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: "0%" },
  }

  const textVariants = {
    initial: { color: "hsl(var(--background))" },
    animate: { color: "hsl(var(--primary))" },
  }

  return (
    <Link href="/docs">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 relative overflow-hidden h-10"
        onHoverStart={() => {
          controls.start("animate")
        }}
        onHoverEnd={() => {
          controls.start("initial")
        }}
      >
        <motion.div className="absolute inset-0 bg-primary text-primary-foreground rounded-lg" />
        <motion.span
          className="relative z-[2] text-nowrap"
          variants={textVariants}
          animate={controls}
          initial="initial"
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.span>
        <motion.div
          initial="initial"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.3 }}
          className="bg-accent absolute inset-0 z-[1] rounded-md"
        />
      </motion.button>
    </Link>
  )
}

const Github = () => {
  return (
    <Link href="https://github.com/rehmankalawant/display-ui" target="_blank">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="px-8 py-2 relative overflow-hidden border border-input rounded-lg h-10"
      >
        Github
      </motion.button>
    </Link>
  )
}

export {
  VerticalDashedLine,
  HorizontalDashedLine,
  Feature,
  BecomeSponsor,
  DashedLineContainer,
  DashedCircle,
  GetStarted,
  Github,
}
