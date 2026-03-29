import { GridNinjaMark } from "@/components/brand/gridninja-logo"

type GridNinjaOgCardProps = {
  title: string
  description: string
  host: string
}

export function GridNinjaOgCard({
  title,
  description,
  host,
}: GridNinjaOgCardProps) {
  const titleLine = title.split("|")[0]?.trim() ?? title

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top right, rgba(255,159,26,0.18), transparent 28%), radial-gradient(circle at top left, rgba(19,32,43,0.9), transparent 34%), linear-gradient(180deg, #09131c 0%, #07111a 100%)",
        color: "#f5f7fa",
        fontFamily:
          'Geist, "Geist Fallback", ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(159,176,191,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(159,176,191,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 58%, transparent 82%)",
          opacity: 0.35,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 72,
          top: 66,
          width: 390,
          height: 390,
          borderRadius: 999,
          border: "1px solid rgba(255,184,74,0.14)",
          background:
            "radial-gradient(circle at center, rgba(255,159,26,0.09), rgba(13,23,32,0.18) 55%, transparent 72%)",
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 98,
          top: 96,
          width: 340,
          height: 340,
          borderRadius: 999,
          border: "1px solid rgba(159,176,191,0.12)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "58px 60px",
          gap: 44,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1 1 0%",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                maxWidth: 440,
                fontSize: 14,
                lineHeight: 1.45,
                letterSpacing: "0.18em",
                color: "#9fb0bf",
                textTransform: "uppercase",
              }}
            >
              {titleLine}
            </div>
            <GridNinjaMark style={{ width: 84, height: 84 }} />
            <div
              style={{
                display: "inline-flex",
                width: "fit-content",
                alignItems: "center",
                gap: 10,
                borderRadius: 999,
                border: "1px solid rgba(255,184,74,0.16)",
                background: "rgba(13,23,32,0.76)",
                padding: "8px 14px",
                fontSize: 12,
                letterSpacing: "0.22em",
                color: "#9fb0bf",
                textTransform: "uppercase",
              }}
            >
              Virtual capacity control plane
            </div>
            <div style={{ maxWidth: 620 }}>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  color: "#f5f7fa",
                  textTransform: "uppercase",
                }}
              >
                GridNinja
              </div>
              <div
                style={{
                  marginTop: 18,
                  fontSize: 57,
                  lineHeight: 1.02,
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                }}
              >
                Unlock virtual capacity for AI data centers
              </div>
              <div
                style={{
                  marginTop: 18,
                  maxWidth: 560,
                  fontSize: 24,
                  lineHeight: 1.35,
                  color: "#9fb0bf",
                }}
              >
                {description}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {["Proof before autonomy", "Safe sellable MW", "Runtime assurance"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: 999,
                    border: "1px solid rgba(255,184,74,0.16)",
                    background: "rgba(19,32,43,0.84)",
                    padding: "10px 14px",
                    fontSize: 14,
                    color: "#f5f7fa",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div
          style={{
            width: 390,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              fontSize: 14,
              letterSpacing: "0.16em",
              color: "#9fb0bf",
              textTransform: "uppercase",
            }}
          >
            <span>Runtime-assured</span>
            <span>{host}</span>
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              border: "1px solid rgba(255,184,74,0.16)",
              background:
                "linear-gradient(180deg, rgba(13,23,32,0.96) 0%, rgba(7,17,26,0.96) 100%)",
              padding: 24,
              height: 376,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 24,
                borderRadius: 18,
                border: "1px solid rgba(159,176,191,0.12)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 32,
                top: 34,
                right: 32,
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 18,
              }}
            >
              {[
                { label: "Power", value: "Utility + DER" },
                { label: "Thermal", value: "Cooling envelope" },
                { label: "Reserve", value: "Safety margin" },
                { label: "Proof", value: "Shadow Mode" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderRadius: 18,
                    border: "1px solid rgba(255,184,74,0.16)",
                    background: "rgba(19,32,43,0.9)",
                    padding: "16px 16px 15px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      letterSpacing: "0.18em",
                      color: "#ff9f1a",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      marginTop: 9,
                      fontSize: 16,
                      color: "#f5f7fa",
                      lineHeight: 1.35,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                position: "absolute",
                left: 88,
                right: 88,
                bottom: 34,
                height: 94,
                borderRadius: 24,
                border: "1px solid rgba(255,159,26,0.2)",
                background:
                  "linear-gradient(180deg, rgba(255,159,26,0.12) 0%, rgba(255,159,26,0.04) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "0 20px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: "#f5f7fa",
                  }}
                >
                  Dispatch envelope
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 14,
                    color: "#9fb0bf",
                  }}
                >
                  Every action is checked before execution.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 14,
              lineHeight: 1.45,
              color: "#9fb0bf",
            }}
          >
            gridninja.ai
          </div>
        </div>
      </div>
    </div>
  )
}
