CREATE TABLE `institutions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`country` text,
	`state` text,
	`city` text,
	`domain` text,
	`type` text DEFAULT 'institute' NOT NULL,
	`rank` integer,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_institutions_name` ON `institutions` (`name`);--> statement-breakpoint
CREATE INDEX `idx_institutions_country` ON `institutions` (`country`);--> statement-breakpoint
CREATE TABLE `payments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`email` text NOT NULL,
	`whatsapp` text,
	`country` text,
	`plan` text NOT NULL,
	`currency` text NOT NULL,
	`amount_cents` integer NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`transaction_ref` text,
	`notes` text,
	`source_page` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_payments_status` ON `payments` (`status`);--> statement-breakpoint
CREATE INDEX `idx_payments_plan` ON `payments` (`plan`);--> statement-breakpoint
CREATE INDEX `idx_payments_created` ON `payments` (`created_at`);--> statement-breakpoint
CREATE TABLE `registrations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`country` text,
	`institution_id` integer,
	`plan` text NOT NULL,
	`paid` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`institution_id`) REFERENCES `institutions`(`id`) ON UPDATE no action ON DELETE set null
);
