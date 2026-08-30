import { motion } from "framer-motion"
import { useEffect, useMemo, useRef, useState } from "react"
import { useScrollProgress } from "../../hooks/useScrollProgress"

type Stage = "rookie" | "squire" | "knight" | "hero"

const getStage = (pct: number): Stage => {
  if (pct >= 100) return "hero"
  if (pct >= 67) return "knight"
  if (pct >= 34) return "squire"
  return "rookie"
}

const STAGE_LABEL: Record<Stage, string> = {
  rookie: "ROOKIE",
  squire: "SQUIRE",
  knight: "KNIGHT",
  hero: "HERO",
}

/* =========================================================
   PIXEL KNIGHT
========================================================= */

const PixelKnight = ({
  stage,
  walking,
}: {
  stage: Stage
  walking: boolean
}) => {
  const isHero = stage === "hero"
  const isKnight = stage === "knight" || stage === "hero"
  const isSquire = stage === "squire"

  return (
    <motion.div
      className="relative w-12 h-14"
      animate={
        walking
          ? {
              y: [0, -2, 0],
            }
          : {
              y: 0,
            }
      }
      transition={{
        duration: 0.32,
        repeat: walking ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      {/* =====================================================
          HERO AURA
      ====================================================== */}

      {isHero && (
        <motion.div
          className="absolute inset-[-12px] rounded-full pointer-events-none"
          animate={{
            opacity: [0.35, 0.8, 0.35],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(245,201,106,.75), transparent 70%)",
          }}
        />
      )}

      {/* =====================================================
          CAPE
      ====================================================== */}

      <motion.div
        className="absolute left-[9px] top-[22px] w-[9px] h-[25px]"
        animate={
          walking
            ? {
                rotate: [4, -6, 4],
              }
            : {}
        }
        transition={{
          duration: 0.32,
          repeat: Infinity,
        }}
        style={{
          background: isHero
            ? "#7c2d12"
            : isKnight
              ? "#991b1b"
              : "#166534",
          boxShadow: "2px 2px 0 #111827",
        }}
      />

      {/* =====================================================
          HEAD / HELMET
      ====================================================== */}

      <div
        className="absolute left-[17px] top-[4px] w-[22px] h-[19px]"
        style={{
          background:
            stage === "rookie"
              ? "#64748b"
              : "#cbd5e1",
          boxShadow: `
            3px 0 0 #1e293b,
            0 3px 0 #1e293b,
            3px 3px 0 #1e293b
          `,
        }}
      />

      {/* Helmet top */}
      <div
        className="absolute left-[20px] top-[1px] w-[16px] h-[5px]"
        style={{
          background: "#94a3b8",
          boxShadow: "2px 2px 0 #1e293b",
        }}
      />

      {/* Helmet visor */}
      <div
        className="absolute left-[18px] top-[13px] w-[20px] h-[5px]"
        style={{
          background: "#111827",
        }}
      />

      {/* Eye */}
      <div
        className="absolute left-[31px] top-[14px] w-[3px] h-[3px]"
        style={{
          background: isHero ? "#f5c96a" : "#e2e8f0",
        }}
      />

      {/* =====================================================
          BODY ARMOR
      ====================================================== */}

      <div
        className="absolute left-[16px] top-[23px] w-[24px] h-[22px]"
        style={{
          background: isHero
            ? "#64748b"
            : isKnight
              ? "#475569"
              : "#64748b",
          boxShadow: `
            3px 0 0 #1e293b,
            0 3px 0 #1e293b
          `,
        }}
      />

      {/* Chest emblem */}
      <div
        className="absolute left-[25px] top-[29px] w-[6px] h-[8px]"
        style={{
          background: isHero
            ? "#f5c96a"
            : isKnight
              ? "#f59e0b"
              : "#94a3b8",
        }}
      />

      {/* =====================================================
          LEFT ARM
      ====================================================== */}

      <motion.div
        className="absolute left-[9px] top-[25px] w-[8px] h-[20px]"
        animate={
          walking
            ? {
                rotate: [18, -18, 18],
              }
            : {}
        }
        transition={{
          duration: 0.32,
          repeat: Infinity,
        }}
        style={{
          transformOrigin: "top center",
          background: "#64748b",
          boxShadow: "2px 2px 0 #1e293b",
        }}
      />

      {/* =====================================================
          RIGHT ARM
      ====================================================== */}

      <motion.div
        className="absolute left-[39px] top-[25px] w-[8px] h-[20px]"
        animate={
          walking
            ? {
                rotate: [-18, 18, -18],
              }
            : {}
        }
        transition={{
          duration: 0.32,
          repeat: Infinity,
        }}
        style={{
          transformOrigin: "top center",
          background: "#64748b",
          boxShadow: "2px 2px 0 #1e293b",
        }}
      />

      {/* =====================================================
          SWORD
      ====================================================== */}

      {isKnight && (
        <motion.div
          className="absolute left-[45px] top-[16px] w-[4px] h-[30px]"
          animate={
            walking
              ? {
                  rotate: [-12, 12, -12],
                }
              : {}
          }
          transition={{
            duration: 0.32,
            repeat: Infinity,
          }}
          style={{
            transformOrigin: "bottom center",
            background: "#e2e8f0",
            boxShadow: `
              2px 0 0 #94a3b8,
              0 -3px 0 #e2e8f0
            `,
          }}
        />
      )}

      {/* Sword handle */}
      {isKnight && (
        <div
          className="absolute left-[43px] top-[43px] w-[8px] h-[4px]"
          style={{
            background: "#f5c96a",
          }}
        />
      )}

      {/* =====================================================
          SHIELD
      ====================================================== */}

      {isSquire && (
        <div
          className="absolute left-[3px] top-[28px] w-[12px] h-[18px]"
          style={{
            background: "#2563eb",
            clipPath:
              "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
            boxShadow: "2px 2px 0 #1e293b",
          }}
        />
      )}

      {isHero && (
        <motion.div
          className="absolute left-[2px] top-[27px] w-[13px] h-[19px]"
          animate={{
            rotate: [-4, 4, -4],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
          style={{
            background: "#f5c96a",
            clipPath:
              "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
            boxShadow: "2px 2px 0 #78350f",
          }}
        />
      )}

      {/* =====================================================
          LEGS
      ====================================================== */}

      <motion.div
        className="absolute left-[19px] top-[43px] w-[8px] h-[17px]"
        animate={
          walking
            ? {
                rotate: [22, -22, 22],
              }
            : {}
        }
        transition={{
          duration: 0.32,
          repeat: Infinity,
        }}
        style={{
          transformOrigin: "top center",
          background: "#334155",
        }}
      />

      <motion.div
        className="absolute left-[31px] top-[43px] w-[8px] h-[17px]"
        animate={
          walking
            ? {
                rotate: [-22, 22, -22],
              }
            : {}
        }
        transition={{
          duration: 0.32,
          repeat: Infinity,
        }}
        style={{
          transformOrigin: "top center",
          background: "#334155",
        }}
      />

      {/* Boots */}
      <div
        className="absolute left-[14px] top-[56px] w-[13px] h-[5px]"
        style={{
          background: "#111827",
        }}
      />

      <div
        className="absolute left-[34px] top-[56px] w-[13px] h-[5px]"
        style={{
          background: "#111827",
        }}
      />
    </motion.div>
  )
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ScrollProgressBar = () => {
  const { progress } = useScrollProgress()

  const percentage = Math.min(
    Math.max(progress, 0),
    100
  )

  const stage = useMemo(
    () => getStage(percentage),
    [percentage]
  )

  const isHero = stage === "hero"

  const prevStage = useRef<Stage>(stage)

  const [leveledUp, setLeveledUp] =
    useState(false)

  useEffect(() => {
    if (prevStage.current !== stage) {
      prevStage.current = stage

      setLeveledUp(true)

      const duration =
        stage === "hero" ? 1200 : 500

      const timeout = window.setTimeout(() => {
        setLeveledUp(false)
      }, duration)

      return () =>
        window.clearTimeout(timeout)
    }
  }, [stage])

  const spring = {
    type: "spring" as const,
    stiffness: 90,
    damping: 20,
    mass: 0.7,
  }

  return (
    <div
      className="scroll-progress-rail w-full"
      aria-label="Scroll progress"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="font-pixel flex items-center justify-between text-[10px] sm:text-xs mb-2">
        <span className="tracking-widest">
          SCROLL
        </span>

        <span className="flex items-center gap-2">
          <motion.span
            className="tracking-widest"
            animate={{
              color: leveledUp
                ? "#f5c96a"
                : "#cbd5e1",
              scale: leveledUp ? 1.15 : 1,
            }}
          >
            {STAGE_LABEL[stage]}
          </motion.span>

          <strong>
            {Math.round(percentage)}%
          </strong>
        </span>
      </div>

      {/* =====================================================
          ROAD — thinner rail; the knight now stands ON TOP of
          it (feet planted at its top edge) instead of being
          vertically centered through it.
      ====================================================== */}

      <div
        className="
          relative
          h-1.5
          sm:h-2
          rounded-full
          overflow-visible
          border
          border-white/10
        "
        style={{
          background:
            "repeating-linear-gradient(90deg, #4a3b2a 0px, #4a3b2a 8px, #3d3020 8px, #3d3020 16px)",
        }}
      >
        {/* Road markings */}

        <div
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 12px, rgba(255,255,255,.5) 12px, rgba(255,255,255,.5) 16px)",
          }}
        />

        {/* =================================================
            PROGRESS
        ================================================== */}

        <motion.div
          className="
            absolute
            inset-y-0
            left-0
            rounded-full
          "
          style={{
            background:
              "linear-gradient(90deg, #b8863b, #f5c96a)",
            boxShadow:
              "0 0 10px rgba(245,201,106,.65)",
          }}
          initial={false}
          animate={{
            width: `${percentage}%`,
          }}
          transition={spring}
        />

        {/* =================================================
            KNIGHT POSITION — anchored to the road's top edge
            (top: 0%) and pulled up almost its full height
            (translateY: -92%) so only his feet overlap the
            road surface, like he's walking along the top of it
            rather than being centered through the bar.
        ================================================== */}

        <motion.div
          className="
            absolute
            z-20
            pointer-events-none
          "
          initial={false}
          animate={{
            left: `${percentage}%`,
            top: "0%",
            scale: leveledUp ? 1.35 : 1,
          }}
          transition={{
            ...spring,
            scale: {
              duration: 0.3,
            },
          }}
          style={{
            translateX: "-50%",
            translateY: "-92%",
          }}
        >
          {/* Knight glow */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
            "
            animate={{
              opacity: isHero
                ? [0.5, 0.9, 0.5]
                : 0.5,
              scale: isHero
                ? [0.9, 1.15, 0.9]
                : 1,
            }}
            transition={{
              duration: 1,
              repeat: isHero ? Infinity : 0,
            }}
            style={{
              width: isHero ? 70 : 48,
              height: isHero ? 70 : 48,
              background:
                "radial-gradient(circle, rgba(245,201,106,.7), transparent 70%)",
            }}
          />

          {/* Knight */}

          <PixelKnight
            stage={stage}
            walking={true}
          />

          {/* =================================================
              LEVEL UP
          ================================================== */}

          {leveledUp && (
            <motion.div
              initial={{
                opacity: 1,
                y: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 0,
                y: -25,
                scale: 1.2,
              }}
              transition={{
                duration: isHero
                  ? 1.1
                  : 0.5,
              }}
              className="
                absolute
                -top-8
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                font-pixel
                text-[#f5c96a]
                text-[9px]
                sm:text-xs
                z-30
              "
            >
              {isHero
                ? "★ HERO! ★"
                : "LEVEL UP!"}
            </motion.div>
          )}

          {/* =================================================
              HERO SPARKLES
          ================================================== */}

          {isHero &&
            [
              [-20, -18],
              [20, -16],
              [-14, 12],
              [16, 14],
              [0, -27],
            ].map(([x, y], i) => (
              <motion.span
                key={i}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  text-[#f5c96a]
                  text-xs
                "
                initial={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 0.4,
                }}
                animate={{
                  opacity: 0,
                  x,
                  y,
                  scale: 1.4,
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                ✦
              </motion.span>
            ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ScrollProgressBar