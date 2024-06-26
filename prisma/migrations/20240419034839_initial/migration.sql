-- CreateTable
CREATE TABLE "classes" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(254) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "counties" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(254) NOT NULL,
    "url" VARCHAR(254) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "counties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modules" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(254) NOT NULL,
    "url" VARCHAR(254) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "module_county" (
    "key" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "county_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "module_county_pkey" PRIMARY KEY ("module_id","county_id")
);

-- CreateTable
CREATE TABLE "module_user" (
    "key" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "user_id" VARCHAR(254) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "module_user_pkey" PRIMARY KEY ("module_id","user_id")
);

-- CreateTable
CREATE TABLE "school_year" (
    "id" TEXT NOT NULL,
    "year" VARCHAR(10) NOT NULL,

    CONSTRAINT "school_year_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "classes_name_key" ON "classes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "counties_name_key" ON "counties"("name");

-- CreateIndex
CREATE UNIQUE INDEX "modules_name_key" ON "modules"("name");

-- CreateIndex
CREATE UNIQUE INDEX "module_county_key_key" ON "module_county"("key");

-- CreateIndex
CREATE UNIQUE INDEX "module_user_key_key" ON "module_user"("key");

-- CreateIndex
CREATE UNIQUE INDEX "school_year_year_key" ON "school_year"("year");

-- AddForeignKey
ALTER TABLE "module_county" ADD CONSTRAINT "module_county_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module_county" ADD CONSTRAINT "module_county_county_id_fkey" FOREIGN KEY ("county_id") REFERENCES "counties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module_user" ADD CONSTRAINT "module_user_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module_county"("key") ON DELETE CASCADE ON UPDATE CASCADE;
